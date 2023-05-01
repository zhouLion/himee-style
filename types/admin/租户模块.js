function s(t){return n=>({get:e=>t.get(n,e),post:e=>t.post(n,e),put:e=>t.put(n,e),head:e=>t.head(n,e),delete:e=>t.delete(n,e),patch:e=>t.patch(n,e)})}export{s as createRequest};
