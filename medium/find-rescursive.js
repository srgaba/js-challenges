function valueInTree(tree, val) {
  if (!tree) return false;
  const currentValue = tree[0];
  if (currentValue === val) return true;
  return valueInTree(tree[1], val) || valueInTree(tree[2], val);
}
