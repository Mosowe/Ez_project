'use strict'
import $ from 'jquery';
// 提示弹框
export function dialog (text, options) {
  const dailog = document.createElement('div');
  dailog.className = 'm-dailog';
  dailog.innerHTML = '<span>' + text + '</span>';
  document.body.appendChild(dailog);
  $('.m-dailog').fadeIn()
  setTimeout(function () {
    $('.m-dailog').fadeOut(500, function () {
      document.body.removeChild(dailog);
      if (options != null) {
        return options();
      }
    }
  )
  }, 1000)
}
