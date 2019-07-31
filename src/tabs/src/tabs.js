import { tns } from 'tiny-slider/src/tiny-slider';
import resizeDetector from 'element-resize-detector';

export default class Tabs {
  // disable: eslint
  constructor(name) {
    this.name = name;
    console.log('Tabs 1', tns, resizeDetector);
  }
}
