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


    set(key: any, value: any){
        const index = this.hash(key);
        this.table[index] = value;
    }

    get(key: string){
        const index = this.hash(key);
        
    }

}


const table = new HashTable(50);