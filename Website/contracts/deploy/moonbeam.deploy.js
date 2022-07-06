// Just a standard hardhat-deploy deployment definition file!
const func = async (hre) => {
	const { deployments, getNamedAccounts } = hre;
	const { deploy } = deployments;
	const { deployer } = await getNamedAccounts();

	const name = 'DEV';
	const symbol = 'DEV';

	await deploy('MoonbeamERC721', {
		from: deployer,
		args: [name, symbol],
		log: true,
	});
};

func.tags = ['DEV'];
module.exports = func;
