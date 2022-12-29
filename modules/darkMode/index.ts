import * as actions from './action';
import * as keys from './key';
import * as atoms from './atom';

const mode = {
  ...actions,
  ...keys,
  ...atoms,
}

export default mode;