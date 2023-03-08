const saveItemInLocal = (itemName, itemValue) => {
    try {
        localStorage.setItem(itemName, JSON.stringify(itemValue));
    } catch (error) {
        console.error(error);
    }
}

export {saveItemInLocal};