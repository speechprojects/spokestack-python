Search.setIndex({
    docnames: [
        "index",
        "modules",
        "spokestack.asr",
        "spokestack.context",
        "spokestack.io",
        "spokestack.models",
        "spokestack.nlu",
        "spokestack.nlu.parsers",
        "spokestack.tts",
        "spokestack.tts.clients",
        "spokestack.vad",
        "spokestack.wakeword",
    ],
    envversion: {
        "sphinx.domains.c": 2,
        "sphinx.domains.changeset": 1,
        "sphinx.domains.citation": 1,
        "sphinx.domains.cpp": 3,
        "sphinx.domains.index": 1,
        "sphinx.domains.javascript": 2,
        "sphinx.domains.math": 2,
        "sphinx.domains.python": 2,
        "sphinx.domains.rst": 2,
        "sphinx.domains.std": 1,
        "sphinx.ext.viewcode": 1,
        sphinx: 56,
    },
    filenames: [
        "index.rst",
        "modules.rst",
        "spokestack.asr.rst",
        "spokestack.context.rst",
        "spokestack.io.rst",
        "spokestack.models.rst",
        "spokestack.nlu.rst",
        "spokestack.nlu.parsers.rst",
        "spokestack.tts.rst",
        "spokestack.tts.clients.rst",
        "spokestack.vad.rst",
        "spokestack.wakeword.rst",
    ],
    objects: {
        "spokestack.asr": {
            cloud_client: [2, 0, 0, "-"],
            speech_recognizer: [2, 0, 0, "-"],
        },
        "spokestack.asr.cloud_client": {
            APIError: [2, 1, 1, ""],
            CloudClient: [2, 2, 1, ""],
        },
        "spokestack.asr.cloud_client.CloudClient": {
            connect: [2, 3, 1, ""],
            disconnect: [2, 3, 1, ""],
            end: [2, 3, 1, ""],
            idle_count: [2, 3, 1, ""],
            idle_timeout: [2, 3, 1, ""],
            initialize: [2, 3, 1, ""],
            is_connected: [2, 3, 1, ""],
            is_final: [2, 3, 1, ""],
            receive: [2, 3, 1, ""],
            response: [2, 3, 1, ""],
            send: [2, 3, 1, ""],
        },
        "spokestack.asr.speech_recognizer": {
            CloudSpeechRecognizer: [2, 2, 1, ""],
        },
        "spokestack.asr.speech_recognizer.CloudSpeechRecognizer": {
            close: [2, 3, 1, ""],
            reset: [2, 3, 1, ""],
        },
        "spokestack.context": { SpeechContext: [3, 2, 1, ""] },
        "spokestack.context.SpeechContext": {
            append_buffer: [3, 3, 1, ""],
            buffer: [3, 3, 1, ""],
            clear_buffer: [3, 3, 1, ""],
            confidence: [3, 3, 1, ""],
            is_active: [3, 3, 1, ""],
            is_speech: [3, 3, 1, ""],
            reset: [3, 3, 1, ""],
            transcript: [3, 3, 1, ""],
        },
        "spokestack.io": { pyaudio: [4, 0, 0, "-"] },
        "spokestack.io.pyaudio": {
            PyAudioInput: [4, 2, 1, ""],
            PyAudioOutput: [4, 2, 1, ""],
        },
        "spokestack.io.pyaudio.PyAudioInput": {
            close: [4, 3, 1, ""],
            is_active: [4, 3, 1, ""],
            is_stopped: [4, 3, 1, ""],
            read: [4, 3, 1, ""],
            start: [4, 3, 1, ""],
            stop: [4, 3, 1, ""],
        },
        "spokestack.io.pyaudio.PyAudioOutput": { write: [4, 3, 1, ""] },
        "spokestack.models": { tensorflow: [5, 0, 0, "-"] },
        "spokestack.models.tensorflow": { TFLiteModel: [5, 2, 1, ""] },
        "spokestack.models.tensorflow.TFLiteModel": {
            input_details: [5, 3, 1, ""],
            output_details: [5, 3, 1, ""],
        },
        "spokestack.nlu": { tflite: [6, 0, 0, "-"] },
        "spokestack.nlu.parsers": {
            digits: [7, 0, 0, "-"],
            entity: [7, 0, 0, "-"],
            integer: [7, 0, 0, "-"],
            selset: [7, 0, 0, "-"],
        },
        "spokestack.nlu.parsers.digits": { parse: [7, 4, 1, ""] },
        "spokestack.nlu.parsers.entity": { parse: [7, 4, 1, ""] },
        "spokestack.nlu.parsers.integer": { parse: [7, 4, 1, ""] },
        "spokestack.nlu.parsers.selset": { parse: [7, 4, 1, ""] },
        "spokestack.nlu.tflite": { TFLiteNLU: [6, 2, 1, ""] },
        "spokestack.tts": { manager: [8, 0, 0, "-"] },
        "spokestack.tts.clients": { spokestack: [9, 0, 0, "-"] },
        "spokestack.tts.clients.spokestack": {
            TTSError: [9, 1, 1, ""],
            TextToSpeechClient: [9, 2, 1, ""],
        },
        "spokestack.tts.clients.spokestack.TextToSpeechClient": {
            synthesize: [9, 3, 1, ""],
        },
        "spokestack.tts.manager": {
            SequenceIO: [8, 2, 1, ""],
            TextToSpeechManager: [8, 2, 1, ""],
        },
        "spokestack.tts.manager.TextToSpeechManager": {
            close: [8, 3, 1, ""],
            synthesize: [8, 3, 1, ""],
        },
        "spokestack.vad": { webrtc: [10, 0, 0, "-"] },
        "spokestack.vad.webrtc": { VoiceActivityDetector: [10, 2, 1, ""] },
        "spokestack.vad.webrtc.VoiceActivityDetector": {
            reset: [10, 3, 1, ""],
        },
        "spokestack.wakeword": {
            ring_buffer: [11, 0, 0, "-"],
            tflite: [11, 0, 0, "-"],
        },
        "spokestack.wakeword.ring_buffer": { RingBuffer: [11, 2, 1, ""] },
        "spokestack.wakeword.ring_buffer.RingBuffer": {
            capacity: [11, 3, 1, ""],
            fill: [11, 3, 1, ""],
            is_empty: [11, 3, 1, ""],
            is_full: [11, 3, 1, ""],
            read: [11, 3, 1, ""],
            read_all: [11, 3, 1, ""],
            reset: [11, 3, 1, ""],
            rewind: [11, 3, 1, ""],
            seek: [11, 3, 1, ""],
            write: [11, 3, 1, ""],
        },
        "spokestack.wakeword.tflite": { WakewordTrigger: [11, 2, 1, ""] },
        "spokestack.wakeword.tflite.WakewordTrigger": { reset: [11, 3, 1, ""] },
        spokestack: { context: [3, 0, 0, "-"] },
    },
    objnames: {
        "0": ["py", "module", "Python module"],
        "1": ["py", "exception", "Python exception"],
        "2": ["py", "class", "Python class"],
        "3": ["py", "method", "Python method"],
        "4": ["py", "function", "Python function"],
    },
    objtypes: {
        "0": "py:module",
        "1": "py:exception",
        "2": "py:class",
        "3": "py:method",
        "4": "py:function",
    },
    terms: {
        abstract: 6,
        byte: [3, 4, 9],
        case: [6, 7],
        class: [2, 3, 4, 5, 6, 8, 9, 10, 11],
        default: [2, 4],
        float: [3, 11],
        import: 7,
        int: [2, 4, 7, 10, 11],
        return: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        true: [3, 4, 11],
        For: 7,
        TTS: 0,
        The: [7, 11],
        These: 7,
        accept: 7,
        acces: 5,
        activ: [0, 3, 4],
        add: 3,
        addit: 5,
        advanc: 11,
        alia: 7,
        alias: 7,
        allow: [7, 8],
        along: [6, 7],
        ambigu: 7,
        ani: [2, 5, 6, 7],
        api: [2, 9],
        api_doc: 5,
        apierror: 2,
        append_buff: 3,
        appl: 7,
        argument: 5,
        arrai: 11,
        asr: 0,
        associ: 6,
        audio: [2, 3, 4, 8, 9, 10, 11],
        audio_format: 2,
        automat: [0, 7],
        base: [2, 5, 9],
        beam: 7,
        befor: 2,
        between: [3, 7],
        binari: 2,
        bool: [2, 3, 4, 11],
        buffer: [0, 3],
        built: 7,
        bulb: 7,
        calcul: 11,
        can: [7, 11],
        capac: 11,
        cardin: 7,
        channel: 4,
        classif: 3,
        clear_buff: 3,
        client: [0, 2, 9],
        close: [2, 4, 8],
        cloud: 2,
        cloud_client: 0,
        cloudclient: 2,
        cloudspeechrecogn: 2,
        commun: 2,
        compon: 10,
        confid: 3,
        connect: 2,
        constant: 10,
        contain: [2, 3, 6, 7, 8, 9, 10, 11],
        content: 11,
        context: 0,
        contrast: 7,
        convert: [7, 9],
        correspond: 7,
        could: 7,
        count: 7,
        counter: 2,
        credenti: [2, 9],
        currect: 11,
        current: [2, 3, 10, 11],
        custom: 7,
        databas: 7,
        decod: 8,
        delai: 10,
        demo: 9,
        dequ: 3,
        desir: [4, 11],
        detail: 5,
        detect: [0, 11],
        determin: 11,
        devic: 4,
        dict: [2, 7],
        differ: 7,
        digit: [0, 6],
        dimension: 11,
        directori: [6, 11],
        disconnect: 2,
        dtype: 11,
        dump: 11,
        edg: 10,
        either: 7,
        emmphasi: 11,
        empti: [2, 3, 11],
        encod: [2, 8, 9],
        end: 2,
        english: 7,
        entir: 11,
        entiti: [0, 6],
        error: [2, 9],
        etc: [7, 8],
        exampl: 7,
        except: [2, 4, 9],
        exception_on_overflow: 4,
        expect: 7,
        fall: 10,
        fals: [3, 4, 11],
        fft: 11,
        fft_hop_length: 11,
        fft_window_typ: 11,
        file: 5,
        fill: 11,
        filter: 11,
        five: 7,
        float32: 11,
        form: [7, 9],
        format: [2, 8],
        frame: [2, 3, 4, 10],
        frame_width: [2, 4, 10],
        from: [2, 4, 7, 9, 11],
        full: 11,
        get: 7,
        given: [8, 9],
        handl: 8,
        hann: 11,
        head: 11,
        hold: 3,
        homophon: 7,
        howev: 7,
        http: [5, 9],
        hyphen: 7,
        ident: [2, 9],
        idl: 2,
        idle_count: 2,
        idle_timeout: 2,
        implement: 11,
        increment: 8,
        indic: 2,
        initi: 2,
        input: [2, 4, 5, 11],
        input_detail: 5,
        integ: [0, 6],
        intent: 6,
        interpret: 5,
        introduc: 7,
        invalid: 7,
        is_act: [3, 4],
        is_connect: 2,
        is_empti: 11,
        is_fin: 2,
        is_ful: 11,
        is_speech: 3,
        is_stop: 4,
        issu: 7,
        item: 11,
        iter: [2, 9],
        its: 7,
        join: 7,
        json: 6,
        kei: [2, 7, 9],
        key_id: [2, 9],
        key_secret: [2, 9],
        keyword: [5, 7, 11],
        khz: [2, 11],
        kwarg: [3, 5],
        lamp: 7,
        languag: [0, 2],
        last: 2,
        latter: 7,
        length: 11,
        light: 7,
        like: 7,
        limit: [2, 7],
        list: [5, 7],
        lite: 5,
        logic: [2, 7],
        mai: 7,
        male: 9,
        manag: [0, 3, 5],
        map: 7,
        markdown: [8, 9],
        max: 11,
        maximum: [2, 7],
        member: 3,
        messag: 2,
        metadata: [6, 7],
        method: 3,
        minimum: 7,
        mode: [8, 9, 10],
        model: [0, 3, 7],
        model_dir: [6, 11],
        model_path: 5,
        modul: [0, 3, 4, 6, 7, 8, 9, 10, 11],
        more: 7,
        most: [2, 7, 11],
        move: 11,
        mp3: 8,
        multi: 7,
        multipl: 5,
        must: 7,
        name: [7, 8, 9, 10],
        natur: 0,
        ndarrai: [2, 11],
        need: [8, 9],
        nine: 7,
        nineti: 7,
        nlu: [0, 7],
        none: [2, 3, 4, 7, 8, 10, 11],
        note: 7,
        num_channel: 4,
        number: [2, 4, 7, 11],
        numpi: 11,
        object: 9,
        occurr: 7,
        one: 7,
        onli: 11,
        org: 5,
        otherwis: [3, 4, 11],
        our: 7,
        out: 2,
        output: [4, 5, 7, 8],
        output_detail: 5,
        overflow: 4,
        paramet: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        pars: 7,
        parsabl: 7,
        parser: [0, 7],
        pass: [2, 7],
        path: [5, 6, 11],
        pcm16le: 2,
        pcm: 2,
        per: [2, 11],
        phone: 7,
        pipelin: [2, 3],
        posit: 11,
        posterior_threshold: 11,
        pre: 11,
        pre_emphasi: 11,
        presenc: [10, 11],
        present: 3,
        probabl: 11,
        proces: 3,
        process: 4,
        produc: 4,
        properti: [2, 3, 4, 5, 11],
        provid: 8,
        pyaudio: 0,
        pyaudioinput: 4,
        pyaudiooutput: 4,
        python: [5, 7],
        rang: 7,
        rate: [2, 4, 10],
        raw_valu: 7,
        read: [4, 11],
        read_al: 11,
        receiv: [2, 8],
        recent: [2, 11],
        recogn: 2,
        recognit: 0,
        render: [8, 9],
        represent: [3, 7],
        request: 2,
        reset: [2, 3, 10, 11],
        resolv: 7,
        respons: [2, 9],
        result: [3, 7],
        retriev: 4,
        rewind: 11,
        ring: 0,
        ring_buff: 11,
        ringbuff: 11,
        rise: 10,
        sampl: [2, 4, 10, 11],
        sample_r: [2, 4, 10, 11],
        search: 7,
        second: 11,
        secret: [2, 9],
        secur: 7,
        seek: 11,
        segment: 2,
        self: 11,
        selset: [0, 6],
        send: 2,
        sequenc: [7, 8, 9],
        sequenceio: 8,
        servic: 2,
        set: [3, 10],
        sever: 2,
        shape: 11,
        singl: [2, 4, 7],
        sixti: 7,
        size: 11,
        slide: 11,
        slot: [6, 7],
        social: 7,
        socket: 2,
        socket_url: 2,
        some: 7,
        sourc: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        specif: 11,
        specifi: [8, 11],
        speech: [0, 9],
        speech_recogn: 0,
        speechcontext: 3,
        spokestack: [3, 6, 7, 8, 10, 11],
        spokestack_id: 2,
        spokestack_secret: 2,
        ssml: [8, 9],
        start: [4, 11],
        state: [3, 10, 11],
        statu: 2,
        step: 11,
        stft: 11,
        stop: 4,
        str: [2, 3, 5, 6, 7, 8, 9, 11],
        stream: [4, 11],
        string: [2, 7, 8, 9],
        support: 11,
        synthes: [8, 9],
        synthesi: [8, 9],
        system: 4,
        tabl: 7,
        tag: 7,
        take: 6,
        target: 8,
        telephon: 7,
        tensorflow: 0,
        text: [0, 2, 3, 9],
        texttospeechcli: 9,
        texttospeechmanag: 8,
        tflite: [0, 5],
        tflitemodel: 5,
        tflitenlu: 6,
        thi: [2, 3, 4, 6, 7, 8, 9, 10, 11],
        thousand: 7,
        three: 7,
        threshold: 11,
        through: [2, 7],
        time: 2,
        timeout: 2,
        transcript: 3,
        tts: [8, 9],
        ttserror: 9,
        twenti: 7,
        two: 7,
        txt: 6,
        type: [2, 3, 4, 5, 7, 8, 9, 10, 11],
        under: 2,
        understand: 0,
        unhyphen: 7,
        union: 7,
        url: [2, 9],
        use: [2, 7, 8, 9],
        used: [2, 7],
        uses: 4,
        using: 6,
        utter: [6, 8, 9],
        vad: 0,
        vad_fall_delai: 10,
        vad_rise_delai: 10,
        valu: [3, 7, 11],
        vocab: 6,
        voic: [0, 8, 9],
        voiceactivitydetector: 10,
        wakeword: 0,
        wakeworddetector: 11,
        wakewordtrigg: 11,
        webrtc: 0,
        websocket: 2,
        which: [6, 7, 8],
        width: [2, 4, 10],
        window: 11,
        word: 7,
        wrapper: [8, 9],
        write: [4, 8, 11],
        written: 11,
        www: 5,
    },
    titles: [
        "spokestack",
        "spokestack",
        "Automatic Speech Recognition (ASR)",
        "Speech Context",
        "IO",
        "Models",
        "Natural Language Understanding (NLU)",
        "Digits",
        "Text to Speech (TTS)",
        "Spokestack",
        "Voice Activity Detection (VAD)",
        "Wakeword",
    ],
    titleterms: {
        TTS: 8,
        activ: 10,
        asr: 2,
        automat: 2,
        buffer: 11,
        client: 8,
        cloud_client: 2,
        context: 3,
        detect: 10,
        digit: 7,
        entiti: 7,
        integ: 7,
        languag: 6,
        manag: 8,
        model: [5, 6, 11],
        modul: [2, 5],
        natur: 6,
        nlu: 6,
        parser: 6,
        pyaudio: 4,
        recognit: 2,
        ring: 11,
        selset: 7,
        speech: [2, 3, 8],
        speech_recogn: 2,
        spokestack: [0, 1, 2, 4, 5, 9],
        tensorflow: 5,
        text: 8,
        tflite: [6, 11],
        understand: 6,
        vad: 10,
        voic: 10,
        wakeword: 11,
        webrtc: 10,
    },
});
