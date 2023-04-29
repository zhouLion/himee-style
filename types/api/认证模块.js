function r(n){return t=>({get:e=>n.get(t,e),post:e=>n.post(t,e),put:e=>n.put(t,e),head:e=>n.head(t,e),delete:e=>n.delete(t,e),patch:e=>n.patch(t,e)})}export{r as createRequest};
