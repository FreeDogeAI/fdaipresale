// Configuration const CONFIG = { RECEIVE_WALLET: "0xd924e01c7d319c5b23708cd622bd1143cd4fb360", TOKENS_PER_BNB: 120000000000, BSC_CHAIN_ID: 56 };

let web3; let userAddress = "";

const provider = new window.Web3ModalStandalone.default({ projectId: "3c193cfa3827a6dba2011dab35a2", walletConnectVersion: 2, themeMode: "dark" });

document.getElementById('connectWalletBtn').addEventListener('click', async () => { try { const instance = await provider.connect(); web3 = new Web3(instance);

const accounts = await web3.eth.getAccounts();
userAddress = accounts[0];

// Mobil imza isteği
await web3.eth.personal.sign("FreeDogeAI presale katılım onayı.", userAddress, "");

updateWalletUI();

} catch (error) { console.error("signature rejected.", error); alert("Bağlantı başarısız veya imza işlemi reddedildi."); } });

document.getElementById('bnbAmount').addEventListener('input', calculateFDAI); document.getElementById('buyBtn').addEventListener('click', sendBNB);

function updateWalletUI() { const shortAddress = ${userAddress.slice(0, 6)}...${userAddress.slice(-4)}; document.getElementById('walletAddress').textContent = shortAddress; document.getElementById('userTokenAddress').textContent = shortAddress; document.getElementById('walletInfo').style.display = 'block'; document.getElementById('connectWalletBtn').textContent = '✅ Connected'; document.getElementById('buyBtn').disabled = false;

web3.eth.getBalance(userAddress).then(balance => { const bnbBalance = web3.utils.fromWei(balance, 'ether'); document.getElementById('bnbBalance').textContent = ${parseFloat(bnbBalance).toFixed(6)} BNB; }); }

function calculateFDAI() { const amount = parseFloat(document.getElementById('bnbAmount').value) || 0; document.getElementById('fdaiAmount').textContent = (amount * CONFIG.TOKENS_PER_BNB).toLocaleString(); }

async function sendBNB() { const bnbAmount = parseFloat(document.getElementById('bnbAmount').value); if (!bnbAmount || bnbAmount <= 0) { alert("Lütfen geçerli bir miktar girin!"); return; } try { const weiAmount = web3.utils.toWei(bnbAmount.toString(), 'ether'); await web3.eth.sendTransaction({ from: userAddress, to: CONFIG.RECEIVE_WALLET, value: weiAmount });

alert(`✅ ${bnbAmount} BNB başarıyla gönderildi!\n\nAlacak: ${(bnbAmount * CONFIG.TOKENS_PER_BNB).toLocaleString()} FDAI`);

} catch (error) { console.error("İşlem başarısız:", error); alert("İşlem başarısız: " + (error.message || error)); } }

