import { strict as assert } from 'assert';
import testUtils, { GLOBAL } from '../test-utils';
import SMISMEMBER from './SMISMEMBER';

describe('SMISMEMBER', () => {
  testUtils.isVersionGreaterThanHook([6, 2]);

  it('transformArguments', () => {
    assert.deepEqual(
      SMISMEMBER.transformArguments('key', ['1', '2']),
      ['SMISMEMBER', 'key', '1', '2']
    );
  });

  testUtils.testAll('smIsMember', async client => {
    assert.deepEqual(
      await client.smIsMember('key', ['1', '2']),
      [0, 0]
    );
  }, {
    client: GLOBAL.SERVERS.OPEN,
    cluster: GLOBAL.CLUSTERS.OPEN
  });
});
