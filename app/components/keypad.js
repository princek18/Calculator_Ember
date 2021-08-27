import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class KeypadComponent extends Component {
  @tracked result = "";

  @action HandleClick(e) {
    if (this.result.length>15) {
      this.args.set("LIMIT EXCEED")
    }
    else{
      this.result += e.target.value;
      this.args.set(this.result);
    }
    console.log(this.result);
  }

  @action HandleC() {
    this.result = '';
    this.args.set(this.result);
    console.log(this.result);
  }

  @action HandleCE() {
    this.result = this.result.substring(0, this.result.length - 1);
    this.args.set(this.result);
    console.log(this.result);
  }

  @action HandleEqual() {
    this.result = String(eval(this.result));
    if (this.result.length>15) {
      this.args.set("LIMIT EXCEED")
    }
    else{
      this.args.set(this.result);
    }
    console.log(this.result);
  }

  // @service('input') one;
  // @action HandleClick(e) {
  //   this.one.handleClick(e.target.value);
  //   console.log(this.one);
  // }
  // @action HandleCE() {
  //   this.one.handleCE();
  //   console.log(this.one);
  // }
  // @action HandleC() {
  //   this.one.handleC();
  //   console.log(this.one);
  // }
  // @action HandleEqual() {
  //   this.one.handleEqual();
  //   console.log(this.one);
  // }
}
