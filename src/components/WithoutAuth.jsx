import { useState } from 'react';
import { Plugin } from 'decir-sdk';

const WithoutAuth = () => {
  const [contractAddress, setContractAddress] = useState(
    '0x33FaCc49c229C9F7862274Bee33dC867fa4fa4B2'
  );
  const [blockchain, setBlockchain] = useState('5');
  const [walletAddress, setWalletAddress] = useState(
    '0xdd09f730d4e17cb147bb9d19bc9a2e3c6566b48f'
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState(false);

  const handleVerify = () => {
    const plugin = new Plugin({
      apiKey: 'sk_xMExXvqFOgZQdgpcIlDEdwypYomEHAcF',
    });
    setIsLoading(true);
    plugin.projects
      .verifyToken(contractAddress, walletAddress, blockchain)
      .then((resp) => {
        setIsVerified(resp?.status);
        setIsLoading(false);
        setError(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <h3>Without SDK wallet Authentication</h3>
      <div>
        <label className='label'>Contract Address</label>
        <input
          name='contractAddress'
          value={contractAddress}
          onChange={(e) => setContractAddress(e.target.value)}
          placeholder='Contract Address'
          className='input-field'
        />
        <label className='label'>Blockchain</label>
        <input
          name='blockchain'
          value={blockchain}
          onChange={(e) => setBlockchain(e.target.value)}
          placeholder='Blockchain'
          className='input-field'
        />
        <label className='label'>Wallet Address</label>
        <input
          name='walletAddress'
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          placeholder='Wallet Address'
          className='input-field'
        />
        <button onClick={handleVerify} className='button'>
          {isLoading ? 'Verifying...' : 'Verify'}
        </button>

        <div>
          <p>Token Verified: {isVerified ? 'true' : <span>false</span>}</p>
        </div>
        {error ? <p style={{ color: 'red' }}>Error: UnAuthorised</p> : null}
      </div>
    </div>
  );
};

export default WithoutAuth;
