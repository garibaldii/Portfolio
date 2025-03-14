import React from "react"
import Particles from "react-particles"
import type { Engine } from "tsparticles-engine"
import { loadStarsPreset } from "tsparticles-preset-stars"

interface IProps {
    // Você pode adicionar as propriedades necessárias aqui, por exemplo:
    someProp?: string;
}

export class ParticlesStar extends React.PureComponent<IProps> {

    async customInit(engine: Engine): Promise<void> {
        await loadStarsPreset(engine)
    }

    render() {
        const options = {
            preset: "stars"
        }


        return <Particles options={options} init={this.customInit} />
    }
}
