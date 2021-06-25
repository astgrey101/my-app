export default class ApiService {
    
    _apiBase = "https://swapi.dev/api"

    async getResource(url: string) {
        const res = await fetch(`${this._apiBase}${url}`)

        if (!res.ok) {
            throw new Error("Could not fetch resource")
        }

        return await res.json()
    }

    getAllPlanets = async () => {
        const result = await this.getResource(`/planets/`)
        return result.results.map(this._transformPlanet)
    }

    getPlanet = async (id: number) => {
        const planet = await this.getResource(`/planets/${id}`)
        return this._transformPlanet(planet)
    }

    _extractId(item: any) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
      }

    _transformPlanet = (planet: any) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
            orbitalPeriod: planet.orbital_period,
            climate: planet.climate,
            gravity: planet.gravity,
            terrain: planet.terrain,
            surfaceWater: planet.surface_water
        }
    }

}