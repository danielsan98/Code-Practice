class HashTable {
    size: number;
    table: Array<any>;
    constructor(size: number){
        this.size = size;
        this.table = new Array(size);
    }

    hash(key: string): number {
        let hashValue = 0;
        for(let i = 0; i < key.length; i++){
            hashValue += key.charCodeAt(i);
        }

        return hashValue % this.size;
    }


    set(key: string, value: any){
        const index = this.hash(key);
        // this.table[index] = value; 
        let bucket =  this.table[index];
        if(!bucket){
            bucket = [[key, value]];
        } else {
            const sameKeyItem = bucket.find((item: {key: string}) => item.key === key);
            if(sameKeyItem){
                sameKeyItem[1] = value;
            }else{
                bucket.push([key, value]);
            }
        }
    }


    get(key: string){
        const index = this.hash(key);
        // return this.table[index];
        //TODO: handle collision

    }

    remove(key: string){
        const index = this.hash(key);
        this.table[index] = undefined;
    }

    display(){
        for(let i = 0; i < this.table.length; i++){
            if(this.table[i]){
                console.log(i, this.table[i])
            }

        }
    }

}


const table = new HashTable(50);

table.set("name", "Bruce")
table.set("age", 25);
table.display();

console.log(table.get("name"));

// table.remove("name")
// table.display();