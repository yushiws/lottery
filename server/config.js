/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const prizes = [
  {
    type: 0,
    count: 1000,
    title: "",
    text: "特别奖"
  },
  {
    type: 1,
    count: 3,
    text: "爱意奖",
    title: ""
  },
  {
    type: 2,
    count: 1,
    text: "一等奖",
    title: ""
  },
  {
    type: 3,
    count: 10,
    text: "二等奖",
    title: ""
  },
  {
    type: 4,
    count: 40,
    text: "三等奖",
    title: ""
  }
];

/**
 * 一次抽取的奖品个数与prizes对应
 */
const EACH_COUNT = [1, 1, 1, 10, 40];

/**
 * 卡片公司名称标识
 */
const COMPANY = "爱意特工";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
