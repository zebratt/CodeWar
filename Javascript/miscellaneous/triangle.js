/**
 *  有n根棍子，棍子i的长度为a(i)。想要从中选出3根棍子组成周长尽可能长的三角形。请输出最大的周长，若无法组成三角形则输出0。
 *
 *  limits：
 *  3 <= n <= 100
 *  1 <= a(i) <= 10^6
 */

require('../common/base');

var inputs = utils.createInputs({
    length : 100
});

// 此题有复杂度为O(nlogn)的算法

// to be continue