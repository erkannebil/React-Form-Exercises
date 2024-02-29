const storage = {
    insertItem: function (isim, email, city, yas, rol) {
        let item = {
            name: isim,
            email,
            city,
            age: yas,
            rol,
        };

        if (localStorage.getItem("cust_" + email) === null) {

            localStorage.setItem(email, JSON.stringify(item));
        } else {

            this.updateItem(email, item);
        }
    },

    updateItem: function (email, item) {

        localStorage.setItem("cust_" + email, JSON.stringify(item));
    },

    deleteItem: function (email) {

        localStorage.removeItem("cust_" + email);

    },

    readItem: function (email) {

        const storage = localStorage.getItem("cust_" + email);
        if (storage) {
            const result = JSON.parse(storage);
            return result;
        } else {
            return null;
        }
    },

    readAllItems: function () {
        let custArr = [];
        for (let i = 0; i < localStorage.length; i++) {
          let keyName = localStorage.key(i);
          if (keyName.startsWith('cust_')) {
            const parsedItem = JSON.parse(localStorage.getItem(keyName));
            custArr.push(parsedItem);
          }
        }
        return custArr;
      }
};

export default storage;