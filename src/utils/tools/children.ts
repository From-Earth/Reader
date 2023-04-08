import React from "react";

/**
 * Returns the text content of a React element's children and applies a character limit if specified.
 *
 * @param {React.ReactNode} text: This parameter represents the React element whose children's text content is to be extracted. It is of type React.ReactNode, which is a generic type that can represent any React node, such as a React element, a string, a number, an array, etc.
 *
 * @param {string} [characterLimit]: This is an optional parameter that represents the character limit to apply to the extracted text content. It is of type string and has a default value of an empty string.
 *
 * @param {number} [childAt]: This is an optional parameter that represents the index of the child whose text content is to be extracted. It has a default value of 0, which means the first child will be used if this parameter is not provided.
 *
 * @param {string} [substituteCharacter]: This is an optional parameter that represents the substitute character to use when the character limit is applied. It has a default value of "...".
 *
 * @returns {React.ReactNode[] | string}: This return value represents the extracted text content of the React element's children, with or without a character limit applied. If no character limit is specified, it returns an array of strings that represent the text content of each child. If a character limit is specified, it returns a string that represents the text content of the selected child, with the character limit applied using the substitute character specified. The return value can be either an array of strings or a single string.
 */
export function getChildrenText(
  text: React.ReactNode,
  characterLimit: string = "",
  childAt: number = 0,
  substituteCharacter: string = "..."
): React.ReactNode[] | string {
  const [operator, limit] = characterLimit.split(":");
  const children = React.Children.toArray(text).filter(
    (child) => typeof child === "string"
  );

  if (!characterLimit) {
    return children;
  } else {
    const textContent = children[childAt] as string;
    const shouldApplyLimit =
      operator === "<"
        ? textContent.length < Number(limit)
        : textContent.length > Number(limit);

    if (shouldApplyLimit) {
      return `${textContent.slice(0, Number(limit))}${substituteCharacter}`;
    } else {
      return textContent;
    }
  }
}


/**
 *
 * @function getChildren
 *
 * Function that returns childrens of
 * a component. You can use this function with a delimiter too.
 *
 * @param {React.ReactNode} children React.ReactNode
 *
 * @param {string} [delimiter]
 *
 * Delimiter should be passed as a string
 * Delimiter has comparables like: <, >, === and so on.
 * example of use
 *
 * @example
 *    getChildren(children, ">:5")
 *
 * @returns {(React.ReactNode[])} React.ReactNode
 */
export function getChildren(
  children: React.ReactNode,
  delimiter?: string
): React.ReactNode[] {
  const childrenArray = React.Children.toArray(children);
  const count = React.Children.count(children);

  const buffer: string[] | undefined =
    delimiter !== "" ? delimiter?.split(":") : [];
  const operator = buffer?.at(0);

  const comparisonString = `${count} ${operator} ${buffer?.at(1)}`;

  if (!delimiter) {
    return childrenArray;
  } else {
    const result = eval(comparisonString) ? childrenArray : [children];
    return result;
  }
}

export function getChildrenCount(children: React.ReactNode) {
  return React.Children.count(children);
}
