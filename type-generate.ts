import { tsGenerator } from "ts-generator"
import { TypeChain } from "typechain/dist/TypeChain"

async function main() {
    const cwd = process.cwd()
    console.log(cwd, __dirname);
    await tsGenerator(
        { cwd },
        new TypeChain({
            cwd,
            rawConfig: {
                files: `${__dirname}/abi/**/+([a-zA-Z0-9_]).json`,
                outDir: "src/",
                target: "ethers-v5",
            },
        }),
    )
}

main().catch(console.error)
