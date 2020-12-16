import locale from './locale';
export default function setLocale(custom) {
  Object.keys(custom).forEach(function (type) {
    Object.keys(custom[type]).forEach(function (method) {
      locale[type][method] = custom[type][method];
    });
  });
}