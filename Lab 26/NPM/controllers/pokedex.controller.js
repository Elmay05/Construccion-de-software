
exports.get = (req, res) => {
    res.render("index", { pokemon: null, error: null });
};

exports.get_pokemon = async (req, res) => {
    const name = req.query.name?.toLowerCase();
    if (!name) {
        return res.render("index", { pokemon: null, error: "Ingrese un nombre de Pokémon" });
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        
        if (!response.ok) {
            throw new Error("Pokémon no encontrado");
        }

        const data = await response.json();
        res.render("index", {
            pokemon: {
                name: data.name,
                id: data.id,
                height: data.height,
                weight: data.weight,
                types: data.types.map(t => t.type.name),
                sprite: data.sprites.front_default
            },
            error: null
        });
    } catch (error) {
        console.error("Error al obtener el Pokémon:", error.message);
        res.render("index", { pokemon: null, error: "Pokémon no encontrado" });
    }
};
