import { PrismaClient } from '@prisma/client';
import {User} from './user';

const prisma =new PrismaClient();

async function main(){
    await prisma.user.create({
        data:User,
    }
    );

    
}

main().catch((e)=>{
    console.error(e);
    process.exit(1);

})
.finally(async () => {
    await prisma.$disconnect();
})