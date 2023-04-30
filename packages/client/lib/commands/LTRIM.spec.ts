import { strict as assert } from 'assert';
import testUtils, { GLOBAL } from '../test-utils';
import LTRIM from './LTRIM';

describe('LTRIM', () => {
  it('transformArguments', () => {
    assert.deepEqual(
      LTRIM.transformArguments('key', 0, -1),
      ['LTRIM', 'key', '0', '-1']
    );
  });

  testUtils.testAll('lTrim', async client => {
    assert.equal(
      await client.lTrim('key', 0, -1),
      'OK'
    );
  }, {
    client: GLOBAL.SERVERS.OPEN,
    cluster: GLOBAL.CLUSTERS.OPEN
  });
});
