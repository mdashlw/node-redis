import { ArrayReply, BlobStringReply, Command } from '../RESP/types';

export default {
  IS_READ_ONLY: true,
  transformArguments(slot: number, count: number) {
    return ['CLUSTER', 'GETKEYSINSLOT', slot.toString(), count.toString()];
  },
  transformReply: undefined as unknown as () => ArrayReply<BlobStringReply>
} as const satisfies Command;
