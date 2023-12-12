import { updateCommitStatus } from '../src/updateCommitStatus';
import { getOctokit } from '../src/getOctokit';
import { VISUAL_REGRESSION_CONTEXT } from 'shared';

jest.mock('../src/getOctokit');
const createCommitStatus = jest.fn(() => ({ catch: jest.fn() }));
(getOctokit as jest.Mock).mockImplementation(() => ({
  rest: {
    repos: {
      createCommitStatus
    }
  }
}));

describe('updateCommitStatus', () => {
  it('calls github api correctly', async () => {
    await updateCommitStatus({
      owner: 'github-owner',
      repo: 'github-repo',
      hash: 'hash'
    });
    expect(createCommitStatus).toHaveBeenCalledWith({
      owner: 'github-owner',
      repo: 'github-repo',
      sha: 'hash',
      state: 'success',
      description: 'Base images updated successfully.',
      context: VISUAL_REGRESSION_CONTEXT
    });
  });
});
