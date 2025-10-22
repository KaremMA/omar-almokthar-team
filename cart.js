(function(global){
    function getCart(){
        try{ return JSON.parse(localStorage.getItem('gameArenaCart') || '[]'); }
        catch(e){ return []; }
    }
    function saveCart(cart){ localStorage.setItem('gameArenaCart', JSON.stringify(cart)); }

    function addToCart(item){
        if(!item || !item.id) return false;
        var cart = getCart();
        var existing = cart.find(function(i){ return i.id === item.id; });
        if(existing){ existing.qty = (existing.qty||1) + (item.qty||1); }
        else { cart.push(Object.assign({qty: item.qty||1}, item)); }
        saveCart(cart);
        return true;
    }

    global.GameArenaCart = {
        getCart: getCart,
        saveCart: saveCart,
        addToCart: addToCart
    };
})(window);
