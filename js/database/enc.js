exports.encryption = (s) => {
    if(s.length == 1){
        return s
    }else{
    var ended = false
    var ended2 = false
    var index = 0
    var horizontal = 1
    var vertical = -1
    var start = 0
    var end = 0
    var splitted = []
    var resultAr = []
    var result = ''
    var textWS = s.split(" ").join("")
    var textRootUp = Math.ceil(Math.sqrt(textWS.length))
    var textRootDown = Math.floor(Math.sqrt(textWS.length))
    
    
    while(!ended){
        index++
        end = index * textRootUp
        start = end - textRootUp
        splitted.push(textWS.slice(start, end))
        if(index >= Math.ceil(textWS.length/textRootDown)){
            ended = true
        }
    }
    while(!ended2){
        vertical++
        if(textRootUp + 1 == vertical + 1 && !ended2){
            horizontal++
            vertical = 0
            resultAr.push(" ")
        }if(!ended2){
            resultAr.push(splitted[vertical].slice(horizontal - 1, horizontal))
        }
        if(vertical * horizontal == textWS.length){
            ended2 = true
        }
    } 
    
    
    var answer = resultAr.join("")
    return answer
    }

}