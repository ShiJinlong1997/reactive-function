/** @type {WeakMap<Function, Set<Function>>} */
const passiveMap = new WeakMap();

/**
 * 连接两个函数
 * @param {Function} passive 
 * @param {Function} active 
 */
export function link(passive, active) {
  const set = passiveMap.get(active) || new Set();
  set.add(passive);
  passiveMap.set(active, set);
}

/**
 * 执行所有被动函数
 * @param {Function} f 
 */
export function effect(f) {
  passiveMap.has(f) &&
  passiveMap.get(f).forEach(fn => fn());
}
