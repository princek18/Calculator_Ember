import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class IndexComponent extends Component {
  @tracked result = '';

  @action set(item){
      this.result = item;
  }

//   @action HandleClick(e) {
//     this.result += e.target.value;
//     console.log(this.result);
//   }

//   @action HandleC() {
//     this.result = '';
//     console.log(this.result);
//   }

//   @action HandleCE() {
//     this.result = this.result.substring(0, this.result.length - 1);
//     console.log(this.result);
//   }

//   @action HandleEqual() {
//     this.result = String(eval(this.result));
//     console.log(this.result);
//   }
}
