import { strict as assert } from 'assert';
import testUtils, { GLOBAL } from '../test-utils';
import ZSCORE from './ZSCORE';

describe('ZSCORE', () => {
  it('transformArguments', () => {
    assert.deepEqual(
      ZSCORE.transformArguments('key', 'member'),
      ['ZSCORE', 'key', 'member']
    );
  });

  testUtils.testAll('zScore', async client => {
    assert.equal(
      await client.zScore('key', 'member'),
      null
    );
  }, {
    client: GLOBAL.SERVERS.OPEN,
    cluster: GLOBAL.CLUSTERS.OPEN
  });
});
