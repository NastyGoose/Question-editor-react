const tests = [
  {
    id: 'q2f2feefef3f4',
    verified: true,
    question:
      'Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World?',
    author: 'Artem',
    views: 22,
    percent: '60%'
  },
  {
    id: 'q2f2fee25f3f4',
    verified: false,
    question: 'Hello Valbat?',
    author: 'Valbat',
    views: 12,
    percent: '24%'
  },
  {
    id: 'q2f2fwafef3f4',
    verified: true,
    question: 'Hello Boosh?',
    author: 'Boosh',
    views: 15,
    percent: '89%'
  },
  {
    id: 'q2f2fwa1ef3f4',
    verified: true,
    question: 'Hello Valik?',
    author: 'Valik',
    views: 34,
    percent: '19%'
  },
  {
    id: 'q2f2fwrfef3f4',
    verified: false,
    question: 'Hello Nikita?',
    author: 'Nikita',
    views: 19,
    percent: '55%'
  }
];

export const getTests = () => {
  const data = [...tests];
  return data;
};

export const getTest = id => {
  const test = tests.find(t => t.id === id);
  return test;
};
