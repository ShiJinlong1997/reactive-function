export type PassiveMap = WeakMap<Function, Set<Function>>;

/**
 * 连接两个函数
 * @param passive 被动函数
 * @param active 主动函数
 */
export function link(passive: Function, active: Function): void;

/**
 * 执行所有被动函数
 * @param f 主动函数
 */
export function effect(f: Function): void;