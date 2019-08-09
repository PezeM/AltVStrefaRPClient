interface ISlotObject {
    [key: number]: number
}

const equipmentSlots: ISlotObject = {
    // Equipment
    1000: -1, // None
    1001: 3, // Torsos
    1002: 8, // Undershirts
    1003: 11, // Tops
    1004: 4, // Legs
    1005: 6, // Shoes
    1006: 9, // Body Armor
    1007: 10, // Decals
    1201: 103, // Extra slot
    1202: 104, // Extra slot 2
    1300: 100, // Left hand
    1301: 101, // Right hand
    1302: 102, // Phone
    // Accessories
    1101: 1, // Masks
    1102: 0, // Hats
    1103: 1, // Glasses
    1104: 6, // Watches
    1105: 7, // Bracelets
    1106: 2, // Ears
    1107: 7, // Accessories
    1108: 5, // Bags
    1203: 105, // Extra slot 3
};

export default equipmentSlots;