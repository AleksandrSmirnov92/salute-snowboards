import * as fs from 'fs';
import * as path from 'path';
import JavaScriptObfuscator from 'javascript-obfuscator';

// Путь к папке с скомпилированными JS файлами после сборки
const buildDir = path.join(__dirname, 'build', 'static', 'js');

// Функция для обфускации файлов
const obfuscateFile = (filePath: string) => {
  const code = fs.readFileSync(filePath, 'utf8');
  const obfuscatedCode = JavaScriptObfuscator.obfuscate(code, {
    compact: true,
    controlFlowFlattening: true,
    numbersToExpressions: true,
    stringArrayShuffle: true,
    stringArrayThreshold: 1,
  }).getObfuscatedCode();

  fs.writeFileSync(filePath, obfuscatedCode, 'utf8');
  console.log(`Обфусцирован файл: ${filePath}`);
};

// Читаем все файлы в папке и применяем обфускацию
fs.readdirSync(buildDir).forEach((file) => {
  if (file.endsWith('.js')) {
    const filePath = path.join(buildDir, file);
    obfuscateFile(filePath);
  }
});
