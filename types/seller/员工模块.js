function r(t){return s=>({get:e=>t.get(s,e),post:e=>t.post(s,e),put:e=>t.put(s,e),head:e=>t.head(s,e),delete:e=>t.delete(s,e),patch:e=>t.patch(s,e)})}export{r as createRequest};
