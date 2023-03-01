// 解析ts=>js
import typescript from 'rollup-plugin-typescript2';
// 解析项所使用到的CommonJS 模块
import commonjs from '@rollup/plugin-commonjs';
// 当使用第三方包时，解析第三方node包
import resolve from '@rollup/plugin-node-resolve';
// 打包时进行eslint校验
import eslint from '@rollup/plugin-eslint';
export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'esm',
    },
    {
      file: 'dist/index.umd.js',
      format: 'umd',
      // 将导出的模块,挂载到window.tsRollupDemo上
      name: 'tsRollupDemo',
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      // 生成.d.ts
      useTsconfigDeclarationDir: true,
    }),
    eslint({
      throwOnError: true,
      throwOnWarning: true,
    }),
  ],
};
