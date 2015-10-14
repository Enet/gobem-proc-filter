# gobem-proc-filter
This processor for [gobem](https://github.com/Enet/gobem) cuts off empty, non-existent and non-loaded files. It has no arguments, just use it.

### Example for **build.gb**
```javascript
select 0
process gobem-proc-filter
write 1
```
