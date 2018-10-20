import typescript from 'rollup-plugin-typescript2';

export default {
  input: './src/index.ts',
  output: [
    {
      file: 'bin/bundle.js',
      format: 'cjs'
    }
  ],
  plugins: [typescript()],
  external: ['fs', 'path', 'jsonfile']
};
