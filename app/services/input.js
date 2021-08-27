import Service from '@ember/service';

export default class InputService extends Service {
  result = '';

  handleClick(part) {
    this.result += part;
  }
  handleCE() {
    this.result = this.result.substring(0, this.result.length - 1);
  }
  handleC() {
    this.result = '';
  }
  handleEqual() {
    this.result = String(eval(this.result));
  }
}
