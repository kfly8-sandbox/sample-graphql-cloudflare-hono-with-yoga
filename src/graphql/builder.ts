import SchemaBuilder from '@pothos/core';
import { GQLContext } from './context';

type GQLSchema = {
  Context: GQLContext;
  DefaultFieldNullability: false;
  // Create a Builder that makes input fields and arguments required by default
  DefaultInputFieldRequiredness: true;
};

export const builder = new SchemaBuilder<GQLSchema>({
  defaultFieldNullability: false,
  defaultInputFieldRequiredness: true,
});

/**
 * ヘルパー関数: 複数行の説明文を簡単に記述するための関数
 * テンプレートリテラルの内容から余分な空白を削除して改行コードに変換します
 *
 * 使用例:
 * ```
 * description: desc`
 *   line 1
 *   line 2
 *   line 3
 * `
 * ```
 */
export function desc(strings: TemplateStringsArray, ...values: any[]): string {
  // テンプレートリテラルを結合
  const text = String.raw({ raw: strings }, ...values);

  // 行ごとに分割し、各行のトリミングを行って再結合
  return text
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .join('\n');
}

// We create empty root query, mutation, and subscription
// because we'll define individual nodes in other files
// since those nodes can have multiple resolvers and possibly
// can lead to really large and hard to read/navigate files
builder.queryType({});
//builder.mutationType({});
//builder.subscriptionType({});
