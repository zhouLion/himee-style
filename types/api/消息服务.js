function r(s){return t=>({get:e=>s.get(t,e),post:e=>s.post(t,e),put:e=>s.put(t,e),head:e=>s.head(t,e),delete:e=>s.delete(t,e),patch:e=>s.patch(t,e)})}export{r as createRequest};
