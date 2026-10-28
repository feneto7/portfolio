import assert from 'node:assert/strict';
import fs from 'node:fs';
import test from 'node:test';
import ts from 'typescript';

function loadSource(path, dependencies = {}) {
  const source = ts.transpileModule(fs.readFileSync(path, 'utf8'), {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;
  const exports = {};
  new Function('exports', 'require', source)(exports, (name) => {
    assert.ok(
      Object.hasOwn(dependencies, name),
      `Unexpected dependency: ${name}`,
    );
    return dependencies[name];
  });
  return exports;
}
const dictionary = loadSource('src/i18n/en.ts');
const { resolveLanguage, localize, language } = loadSource(
  'src/i18n/locale.ts',
  { './en': dictionary },
);

test('matches regional browser languages in preference order', () => {
  assert.equal(resolveLanguage(null, ['en-GB', 'pt-BR']), 'en');
  assert.equal(resolveLanguage(null, ['pt-PT', 'en-US']), 'pt');
  assert.equal(resolveLanguage('auto', ['fr-FR', 'en-US']), 'en');
  assert.equal(resolveLanguage('auto', ['fr-FR', 'pt-BR']), 'pt');
});
test('manual choice wins; unsupported or missing languages fall back to English', () => {
  assert.equal(resolveLanguage('pt', ['en-US']), 'pt');
  assert.equal(resolveLanguage('en', ['pt-BR']), 'en');
  assert.equal(resolveLanguage('invalid', ['de-DE']), 'en');
  assert.equal(resolveLanguage(null, []), 'en');
  assert.equal(
    language,
    'pt',
    'Static build has no browser and stays in Portuguese',
  );
});
test('translates nested copy without changing icons, links, original assets or input', () => {
  const icon = {
    $$typeof: Symbol.for('react.forward_ref'),
    render: () => null,
  };
  const original = {
    title: 'Início',
    items: [{ label: 'Contato', icon }],
    href: '/cv-felipe-neto.pdf',
    email: 'franciscofelipesn@gmail.com',
  };
  const translated = localize(original, 'en');
  assert.equal(translated.title, 'Home');
  assert.equal(translated.items[0].label, 'Contact');
  assert.equal(translated.items[0].icon, icon);
  assert.equal(translated.href, original.href);
  assert.equal(translated.email, original.email);
  assert.equal(original.title, 'Início');
  assert.equal(localize(original, 'pt'), original);
  assert.equal(localize('toString', 'en'), 'toString');
});
test('Portuguese copy with accents has an English translation', () => {
  const unchanged = new Set([
    'São Felipe, BA',
    'FranciscoFelipe_SantiagoNeto_Currículo.pdf',
  ]);
  for (const name of fs.readdirSync('src/data')) {
    const path = `src/data/${name}`;
    const ast = ts.createSourceFile(
      path,
      fs.readFileSync(path, 'utf8'),
      ts.ScriptTarget.Latest,
      true,
    );
    function visit(node) {
      if (
        ts.isStringLiteral(node) &&
        /[À-ÿ]/.test(node.text) &&
        !unchanged.has(node.text)
      ) {
        assert.ok(
          Object.hasOwn(dictionary.english, node.text),
          `${path}: missing translation for ${node.text}`,
        );
      }
      ts.forEachChild(node, visit);
    }
    visit(ast);
  }
});
