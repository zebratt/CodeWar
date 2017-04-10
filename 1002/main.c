#include <stdio.h>
#include <string.h>

int i = 0, j = 0;

char * bigSum(char *a, char *b){
    unsigned lenA = (unsigned) strlen(a);
    unsigned lenB = (unsigned) strlen(b);

    int lastReminder = 0;

    for(i=lenB; i>0; i--){
        int idxA = i + lenA - lenB -1;
        int idxB = i - 1;
        int nA = a[idxA] - '0';
        int nB = b[idxB] - '0';

        a[idxA] = ( nA + nB ) % 10 + lastReminder + '0';
        lastReminder = nA + nB > 9 ? 1 : 0;

        if(idxA == 0 && lastReminder == 1){
            for(j=lenA; j>0; j--){
                a[j] = a[j-1];
            }
            a[0] = '1';
        }else if(idxB == 0 && lastReminder == 1){
            for(j=idxA - 1; j>=0 && a[j] == '9'; j--){
                a[j] = '0';
            }
            if(j < 0){
                for(j=lenA; j>0; j--){
                    a[j] = a[j-1];
                }
                a[0] = '1';
            }else{
                a[j] = (a[j] - '0') + '1';
            }
        }
    }

    return a;
}

int main(){
    int caseNum = 0, n = 1;

    scanf("%d", &caseNum);
    while (caseNum){
        char a[1001], b[1000];

        scanf("%s %s", a, b);
        printf("Case %d:\n", n++);
        printf("%s + %s =", a, b);
        char *c = strlen(a) >= strlen(b) ? bigSum(a,b) : bigSum(b,a);
        printf(" %s\n", c);

        if(caseNum > 1) printf("\n");
        caseNum--;
    }
}