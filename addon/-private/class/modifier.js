import { setOwner } from '@ember/application';
import { setModifierManager } from '@ember/modifier';
import Manager from './modifier-manager';

export const DESTROYING = Symbol('destroying');
export const DESTROYED = Symbol('destroyed');

export default class ClassBasedModifier {
  [DESTROYING] = false;
  [DESTROYED] = false;

  constructor(owner, args) {
    setOwner(this, owner);
    this.element = null;
    this.args = args;
  }

  didReceiveArguments() {}
  didUpdateArguments() {}
  didInstall() {}
  willRemove() {}
  willDestroy() {}

  get isDestroying() {
    return this[DESTROYING];
  }

  get isDestroyed() {
    return this[DESTROYED];
  }
}

setModifierManager(() => Manager, ClassBasedModifier);
