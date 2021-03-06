/**
 * 任意カテゴリ
 * Category Domain Object
 * @name カテゴリ名
 */
import React from "react";

// Types
import { typeCategory } from "aparel-ec";

interface Props {
  name?: typeCategory["name"];
}
export const Category = (props: Props) => {
  const { name } = props;
  return <h1>{name || "カテゴリ名不明"}</h1>;
};
