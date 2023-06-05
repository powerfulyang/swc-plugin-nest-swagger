import { transformSync } from '@swc/core';
import { describe, expect, it } from '@jest/globals';
import NestSwaggerVisitor from './index';

describe('NestSwaggerVisitor', () => {
  it('test', () => {
    const expectThrowError = () => {
      transformSync(
        `
      function fn(): string {
        return 'hello';
      }
    `,
        {
          plugin(m) {
            return new NestSwaggerVisitor().visitProgram(m);
          },
          jsc: {
            target: 'esnext',
            parser: {
              syntax: 'typescript',
            },
          },
        },
      );
    };
    expect(expectThrowError).toThrowError('Method visitTsType not implemented.');
  });
});
