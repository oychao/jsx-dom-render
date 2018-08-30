import babel from 'rollup-plugin-babel';

export default {
  input: './index.js',
  output: [
    {
      file: 'bin/bundle.js',
      format: 'umd',
      name: 'React'
    }
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      externalHelpers: true,
      plugins: ['@babel/external-helpers']
    })
  ],
  external: ['fs', 'path', 'jsonfile']
};
