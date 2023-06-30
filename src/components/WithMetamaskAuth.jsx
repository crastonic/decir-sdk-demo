import { useState } from 'react';
import { Plugin, Auth, useAuth } from 'decir-sdk';

const WithMetamaskAuth = () => {
  let { setOpen, open } = useAuth();
  const [contractAddress, setContractAddress] = useState(
    '0x33FaCc49c229C9F7862274Bee33dC867fa4fa4B2'
  );
  const [isVerified, setIsVerified] = useState(false);
  const [blockchain, setBlockchain] = useState('80001');
  const [isLoading, setIsLoading] = useState(false);

  const handleVerify = (data) => {
    setIsLoading(true);
    const plugin = new Plugin({
      apiKey: 'sk_xMExXvqFOgZQdgpcIlDEdwypYomEHAcF',
    });
    plugin.projects
      .verifyToken(contractAddress, data, blockchain)
      .then((resp) => {
        setIsVerified(resp?.status);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div>
      <Auth open={open} setOpen={setOpen} callback={handleVerify} />
      <h3>With SDK Metamask wallet Authentication</h3>
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
        <button onClick={handleOpen} className='button'>
          {isLoading ? 'Verifying' : 'Verify'}
        </button>
        <div>
          <p>Token Verified: {isVerified ? 'true' : <span>false</span>}</p>
        </div>
      </div>
    </div>
  );
};

export default WithMetamaskAuth;
