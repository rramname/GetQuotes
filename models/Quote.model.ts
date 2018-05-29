export class QuoteModel
{
    public qotd_date:string="";//": "2018-05-26T00:00:00.000+00:00",
    public quote:quote;
}

export class quote{
    public id:string="";
    public dialogue:boolean;
    public private: boolean;
    public tags:string[];
    public url:string;
    public favorites_count:number;
    public upvotes_count:number;
    public downvotes_count: number;
    public author: string;
    public author_permalink: string;
    public body: string;
}