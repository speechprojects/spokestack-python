Search.setIndex({
    docnames: [
        "index",
        "spokestack.activation_timeout",
        "spokestack.agc",
        "spokestack.asr",
        "spokestack.context",
        "spokestack.io",
        "spokestack.models",
        "spokestack.nlu",
        "spokestack.nlu.parsers",
        "spokestack.nsx",
        "spokestack.pipeline",
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
        "spokestack.activation_timeout.rst",
        "spokestack.agc.rst",
        "spokestack.asr.rst",
        "spokestack.context.rst",
        "spokestack.io.rst",
        "spokestack.models.rst",
        "spokestack.nlu.rst",
        "spokestack.nlu.parsers.rst",
        "spokestack.nsx.rst",
        "spokestack.pipeline.rst",
        "spokestack.tts.rst",
        "spokestack.tts.clients.rst",
        "spokestack.vad.rst",
        "spokestack.wakeword.rst",
    ],
    objects: {
        "spokestack.activation_timeout": { ActivationTimeout: [1, 1, 1, ""] },
        "spokestack.activation_timeout.ActivationTimeout": {
            close: [1, 2, 1, ""],
            deactivate: [1, 2, 1, ""],
            reset: [1, 2, 1, ""],
        },
        "spokestack.agc": { webrtc: [2, 0, 0, "-"] },
        "spokestack.agc.webrtc": { AutomaticGainControl: [2, 1, 1, ""] },
        "spokestack.agc.webrtc.AutomaticGainControl": {
            close: [2, 2, 1, ""],
            reset: [2, 2, 1, ""],
        },
        "spokestack.asr.google": { speech_recognizer: [3, 0, 0, "-"] },
        "spokestack.asr.google.speech_recognizer": {
            GoogleSpeechRecognizer: [3, 1, 1, ""],
        },
        "spokestack.asr.google.speech_recognizer.GoogleSpeechRecognizer": {
            close: [3, 2, 1, ""],
            reset: [3, 2, 1, ""],
        },
        "spokestack.asr.spokestack": {
            cloud_client: [3, 0, 0, "-"],
            speech_recognizer: [3, 0, 0, "-"],
        },
        "spokestack.asr.spokestack.cloud_client": {
            APIError: [3, 3, 1, ""],
            CloudClient: [3, 1, 1, ""],
        },
        "spokestack.asr.spokestack.cloud_client.CloudClient": {
            connect: [3, 2, 1, ""],
            disconnect: [3, 2, 1, ""],
            end: [3, 2, 1, ""],
            idle_count: [3, 2, 1, ""],
            idle_timeout: [3, 2, 1, ""],
            initialize: [3, 2, 1, ""],
            is_connected: [3, 2, 1, ""],
            is_final: [3, 2, 1, ""],
            receive: [3, 2, 1, ""],
            response: [3, 2, 1, ""],
            send: [3, 2, 1, ""],
        },
        "spokestack.asr.spokestack.speech_recognizer": {
            CloudSpeechRecognizer: [3, 1, 1, ""],
        },
        "spokestack.asr.spokestack.speech_recognizer.CloudSpeechRecognizer": {
            close: [3, 2, 1, ""],
            reset: [3, 2, 1, ""],
        },
        "spokestack.context": { SpeechContext: [4, 1, 1, ""] },
        "spokestack.context.SpeechContext": {
            add_handler: [4, 2, 1, ""],
            confidence: [4, 2, 1, ""],
            event: [4, 2, 1, ""],
            is_active: [4, 2, 1, ""],
            is_speech: [4, 2, 1, ""],
            reset: [4, 2, 1, ""],
            transcript: [4, 2, 1, ""],
        },
        "spokestack.io": { pyaudio: [5, 0, 0, "-"] },
        "spokestack.io.pyaudio": {
            PyAudioInput: [5, 1, 1, ""],
            PyAudioOutput: [5, 1, 1, ""],
        },
        "spokestack.io.pyaudio.PyAudioInput": {
            close: [5, 2, 1, ""],
            is_active: [5, 2, 1, ""],
            is_stopped: [5, 2, 1, ""],
            read: [5, 2, 1, ""],
            start: [5, 2, 1, ""],
            stop: [5, 2, 1, ""],
        },
        "spokestack.io.pyaudio.PyAudioOutput": { write: [5, 2, 1, ""] },
        "spokestack.models": { tensorflow: [6, 0, 0, "-"] },
        "spokestack.models.tensorflow": { TFLiteModel: [6, 1, 1, ""] },
        "spokestack.models.tensorflow.TFLiteModel": {
            input_details: [6, 2, 1, ""],
            output_details: [6, 2, 1, ""],
        },
        "spokestack.nlu": { tflite: [7, 0, 0, "-"] },
        "spokestack.nlu.parsers": {
            digits: [8, 0, 0, "-"],
            entity: [8, 0, 0, "-"],
            integer: [8, 0, 0, "-"],
            selset: [8, 0, 0, "-"],
        },
        "spokestack.nlu.parsers.digits": { parse: [8, 4, 1, ""] },
        "spokestack.nlu.parsers.entity": { parse: [8, 4, 1, ""] },
        "spokestack.nlu.parsers.integer": { parse: [8, 4, 1, ""] },
        "spokestack.nlu.parsers.selset": { parse: [8, 4, 1, ""] },
        "spokestack.nlu.tflite": { TFLiteNLU: [7, 1, 1, ""] },
        "spokestack.nsx": { webrtc: [9, 0, 0, "-"] },
        "spokestack.nsx.webrtc": { AutomaticNoiseSuppression: [9, 1, 1, ""] },
        "spokestack.nsx.webrtc.AutomaticNoiseSuppression": {
            close: [9, 2, 1, ""],
            reset: [9, 2, 1, ""],
        },
        "spokestack.pipeline": { SpeechPipeline: [10, 1, 1, ""] },
        "spokestack.pipeline.SpeechPipeline": {
            activate: [10, 2, 1, ""],
            cleanup: [10, 2, 1, ""],
            close: [10, 2, 1, ""],
            context: [10, 2, 1, ""],
            deactivate: [10, 2, 1, ""],
            event: [10, 2, 1, ""],
            is_running: [10, 2, 1, ""],
            pause: [10, 2, 1, ""],
            resume: [10, 2, 1, ""],
            run: [10, 2, 1, ""],
            start: [10, 2, 1, ""],
            step: [10, 2, 1, ""],
            stop: [10, 2, 1, ""],
        },
        "spokestack.ring_buffer": { RingBuffer: [14, 1, 1, ""] },
        "spokestack.ring_buffer.RingBuffer": {
            capacity: [14, 2, 1, ""],
            fill: [14, 2, 1, ""],
            is_empty: [14, 2, 1, ""],
            is_full: [14, 2, 1, ""],
            read: [14, 2, 1, ""],
            read_all: [14, 2, 1, ""],
            reset: [14, 2, 1, ""],
            rewind: [14, 2, 1, ""],
            seek: [14, 2, 1, ""],
            write: [14, 2, 1, ""],
        },
        "spokestack.tts": { manager: [11, 0, 0, "-"] },
        "spokestack.tts.clients": { spokestack: [12, 0, 0, "-"] },
        "spokestack.tts.clients.spokestack": {
            TTSError: [12, 3, 1, ""],
            TextToSpeechClient: [12, 1, 1, ""],
        },
        "spokestack.tts.clients.spokestack.TextToSpeechClient": {
            synthesize: [12, 2, 1, ""],
            synthesize_url: [12, 2, 1, ""],
        },
        "spokestack.tts.manager": {
            SequenceIO: [11, 1, 1, ""],
            TextToSpeechManager: [11, 1, 1, ""],
        },
        "spokestack.tts.manager.TextToSpeechManager": {
            close: [11, 2, 1, ""],
            synthesize: [11, 2, 1, ""],
        },
        "spokestack.vad": { webrtc: [13, 0, 0, "-"] },
        "spokestack.vad.webrtc": {
            VoiceActivityDetector: [13, 1, 1, ""],
            VoiceActivityTrigger: [13, 1, 1, ""],
        },
        "spokestack.vad.webrtc.VoiceActivityDetector": {
            close: [13, 2, 1, ""],
            reset: [13, 2, 1, ""],
        },
        "spokestack.wakeword": { tflite: [14, 0, 0, "-"] },
        "spokestack.wakeword.tflite": { WakewordTrigger: [14, 1, 1, ""] },
        "spokestack.wakeword.tflite.WakewordTrigger": {
            close: [14, 2, 1, ""],
            reset: [14, 2, 1, ""],
        },
        spokestack: {
            activation_timeout: [1, 0, 0, "-"],
            context: [4, 0, 0, "-"],
            pipeline: [10, 0, 0, "-"],
            ring_buffer: [14, 0, 0, "-"],
        },
    },
    objnames: {
        0: ["py", "module", "Python module"],
        1: ["py", "class", "Python class"],
        2: ["py", "method", "Python method"],
        3: ["py", "exception", "Python exception"],
        4: ["py", "function", "Python function"],
    },
    objtypes: {
        0: "py:module",
        1: "py:class",
        2: "py:method",
        3: "py:exception",
        4: "py:function",
    },
    terms: {
        "10db": 9,
        "15db": 9,
        "6db": 9,
        abstract: 7,
        byte: [5, 12],
        case: [7, 8],
        class: [1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 13, 14],
        default: [3, 5, 10],
        float: [4, 14],
        function: [4, 10],
        import: 8,
        int: [1, 2, 3, 5, 8, 9, 13, 14],
        return: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        true: [2, 4, 5, 14],
        For: 8,
        TTS: 0,
        The: [3, 4, 8, 14],
        These: 8,
        accept: 8,
        acces: 6,
        access: 12,
        activ: [0, 4, 5, 10],
        activation_timeout: 1,
        activationtimeout: 1,
        add: 4,
        add_handl: 4,
        addit: [3, 6, 10],
        advanc: 14,
        after: 10,
        agc: 2,
        aggres: 9,
        aggress: 9,
        alia: 8,
        alias: 8,
        all: 10,
        allow: [8, 11],
        along: [7, 8],
        ambigu: 8,
        ani: [3, 6, 7, 8],
        api: [3, 12],
        api_doc: 6,
        apierror: 3,
        appl: 8,
        argument: [3, 6, 10],
        arrai: 14,
        asr: 0,
        associ: 7,
        attribut: 10,
        audio: [1, 2, 3, 4, 5, 9, 10, 11, 12, 13, 14],
        audio_format: 3,
        automat: [0, 8],
        automaticgaincontrol: 2,
        automaticnoisesuppress: 9,
        base: [3, 6, 12],
        bcp47: 3,
        bcp: 3,
        beam: 8,
        befor: 3,
        between: [4, 8],
        binari: 3,
        bool: [2, 3, 4, 5, 10, 14],
        buffer: [0, 4],
        built: 8,
        bulb: 8,
        calcul: 14,
        call: [4, 10],
        callabl: 4,
        can: [8, 14],
        capac: 14,
        cardin: 8,
        channel: 5,
        classif: 4,
        clean: 10,
        cleanup: 10,
        client: [0, 3, 12],
        clip: 12,
        close: [1, 2, 3, 5, 9, 10, 11, 13, 14],
        cloud: 3,
        cloud_client: 0,
        cloudclient: 3,
        cloudspeechrecogn: 3,
        commun: 3,
        complianc: [2, 9],
        compon: [10, 13],
        compress: 2,
        compression_gain_db: 2,
        confid: 4,
        configur: 10,
        connect: 3,
        constant: 13,
        contain: [2, 3, 4, 7, 8, 9, 10, 11, 12, 13, 14],
        content: 14,
        context: [0, 1, 10],
        contrast: 8,
        control: 0,
        convert: [8, 12],
        correspond: 8,
        could: 8,
        count: 8,
        counter: 3,
        credenti: [3, 12],
        currect: 14,
        current: [3, 4, 10, 13, 14],
        custom: 8,
        databas: 8,
        dbf: 2,
        deactiv: [1, 10],
        decod: 11,
        delai: 13,
        demo: 12,
        desir: [5, 10, 14],
        detail: 6,
        detect: [0, 14],
        detector: 13,
        determin: 14,
        devic: 5,
        dict: [3, 8],
        dictionari: 3,
        differ: 8,
        digit: [0, 7],
        dimension: 14,
        directori: [7, 14],
        disconnect: 3,
        dtype: 14,
        dump: 14,
        dynam: 2,
        edg: 13,
        editor: 3,
        either: 8,
        emmphasi: 14,
        empti: [3, 14],
        enabl: 2,
        encod: [3, 11, 12],
        end: 3,
        english: 8,
        entir: 14,
        entiti: [0, 7],
        environ: 3,
        error: [3, 12],
        etc: [8, 11],
        event: [4, 10],
        exampl: [3, 8],
        except: [3, 5, 12],
        exception_on_overflow: 5,
        expect: 8,
        fall: 13,
        fals: [4, 5, 14],
        fft: 14,
        fft_hop_length: 14,
        fft_window_typ: 14,
        file: 6,
        fill: 14,
        filter: 14,
        five: 8,
        float32: 14,
        form: [8, 12],
        format: [3, 11],
        frame: [1, 2, 3, 5, 10, 13],
        frame_width: [1, 2, 3, 5, 13],
        from: [3, 5, 8, 12, 14],
        full: 14,
        gain: 0,
        get: 8,
        given: [3, 11, 12],
        googl: 0,
        google_application_credenti: 3,
        googlespeechrecogn: 3,
        halt: 10,
        handl: 11,
        handler: [4, 10],
        hann: 14,
        head: 14,
        homophon: 8,
        howev: 8,
        http: [3, 6, 12],
        hyphen: 8,
        ident: [3, 12],
        idl: 3,
        idle_count: 3,
        idle_timeout: 3,
        implement: 14,
        increment: 11,
        indic: 3,
        initi: 3,
        input: [3, 5, 6, 10, 14],
        input_detail: 6,
        input_sourc: 10,
        integ: [0, 7],
        intent: 7,
        interfac: [13, 14],
        interpret: 6,
        introduc: 8,
        invalid: 8,
        is_act: [4, 5],
        is_connect: 3,
        is_empti: 14,
        is_fin: 3,
        is_ful: 14,
        is_run: 10,
        is_speech: 4,
        is_stop: 5,
        issu: 8,
        item: 14,
        iter: [3, 12],
        its: 8,
        join: 8,
        json: 7,
        kei: [3, 8, 12],
        key_id: [3, 12],
        key_secret: [3, 12],
        keyword: [3, 6, 8, 10, 14],
        khz: [3, 14],
        kwarg: [1, 2, 3, 5, 6, 9, 10, 13, 14],
        lamp: 8,
        languag: [0, 3],
        last: 3,
        latter: 8,
        length: [1, 14],
        level: 2,
        light: 8,
        like: 8,
        limit: [2, 3, 8],
        limit_en: 2,
        list: [6, 8],
        lite: 6,
        logic: [3, 8],
        mai: 8,
        male: 12,
        manag: [0, 1, 4, 6, 10],
        map: 8,
        markdown: [11, 12],
        max: 14,
        max_act: 1,
        maximum: [1, 3, 8],
        medium: 9,
        member: 4,
        messag: 3,
        metadata: [7, 8],
        method: [2, 9],
        mild: 9,
        min_act: 1,
        minimum: [1, 8],
        mode: [11, 12, 13],
        model: [0, 4, 8],
        model_dir: [7, 14],
        model_path: 6,
        modul: [0, 1, 2, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14],
        more: 8,
        most: [3, 8, 14],
        move: 14,
        mp3: 11,
        multi: 8,
        multipl: 6,
        must: 8,
        name: [4, 8, 10, 11, 12, 13],
        natur: 0,
        ndarrai: [3, 5, 14],
        need: [11, 12],
        nine: 8,
        nineti: 8,
        nlu: [0, 8],
        nois: 0,
        none: [1, 2, 3, 4, 5, 8, 9, 10, 11, 13, 14],
        note: 8,
        nsx: 9,
        num_channel: 5,
        number: [3, 5, 8, 14],
        numpi: 14,
        object: 12,
        occurr: 8,
        one: 8,
        onli: 14,
        option: 3,
        org: [3, 6],
        otherwis: [4, 5, 14],
        our: 8,
        out: 3,
        output: [5, 6, 8, 11],
        output_detail: 6,
        overflow: 5,
        paramet: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        pars: 8,
        parsabl: 8,
        parser: [0, 8],
        pass: [3, 8],
        path: [3, 6, 7, 14],
        paus: 10,
        pcm16le: 3,
        pcm: [3, 5],
        peak: 2,
        per: [3, 14],
        phone: 8,
        pipelin: [0, 1, 2, 3, 4, 9, 13, 14],
        polici: 9,
        policy_aggress: 9,
        policy_medium: 9,
        policy_mild: 9,
        policy_very_aggress: 9,
        posit: 14,
        posterior_threshold: 14,
        pre: 14,
        pre_emphasi: 14,
        presenc: [13, 14],
        present: 4,
        probabl: 14,
        process: [4, 5, 10],
        produc: 5,
        properti: [3, 4, 5, 6, 10, 14],
        provid: 11,
        pull: 3,
        pyaudio: 0,
        pyaudioinput: 5,
        pyaudiooutput: 5,
        python: [6, 8],
        rang: [2, 8],
        rate: [2, 3, 5, 9, 13],
        raw_valu: 8,
        read: [5, 14],
        read_al: 14,
        receiv: [3, 11],
        recent: [3, 14],
        recogn: 3,
        recognit: 0,
        regist: 10,
        render: [11, 12],
        represent: [4, 8],
        request: 3,
        reset: [1, 2, 3, 4, 9, 10, 13, 14],
        resolv: 8,
        respons: [3, 12],
        result: [4, 8],
        resum: 10,
        retriev: 5,
        rewind: 14,
        rfc: 3,
        ring: 0,
        ring_buff: 14,
        ringbuff: 14,
        rise: 13,
        run: 10,
        sampl: [3, 5, 9, 13, 14],
        sample_r: [2, 3, 5, 9, 13, 14],
        search: 8,
        second: 14,
        secret: [3, 12],
        secur: 8,
        seek: 14,
        segment: 3,
        self: 14,
        selset: [0, 7],
        send: 3,
        sequenc: [8, 11, 12],
        sequenceio: 11,
        servic: 3,
        set: [1, 3, 4, 13],
        sever: 3,
        shape: 14,
        singl: [3, 5, 8, 10],
        sixti: 8,
        size: 14,
        slide: 14,
        slot: [7, 8],
        social: 8,
        socket: 3,
        socket_url: 3,
        some: 8,
        sourc: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        specif: 14,
        specifi: [10, 11, 14],
        speech: [0, 1, 12],
        speech_recogn: 0,
        speechcontext: [4, 10],
        speechpipelin: 10,
        spokestack: [1, 2, 4, 7, 8, 9, 10, 11, 13, 14],
        spokestack_id: 3,
        spokestack_secret: 3,
        ssml: [11, 12],
        stage: 10,
        start: [5, 10, 14],
        state: [4, 10, 13, 14],
        statu: 3,
        step: [10, 14],
        stft: 14,
        stop: [5, 10],
        str: [3, 4, 6, 7, 8, 11, 12, 14],
        stream: [5, 14],
        string: [3, 8, 11, 12],
        support: 14,
        suppress: 0,
        synthes: [11, 12],
        synthesi: [11, 12],
        synthesize_url: 12,
        system: 5,
        tabl: 8,
        tag: [3, 8],
        take: 7,
        target: [2, 11],
        target_level_dbf: 2,
        telephon: 8,
        tensorflow: 0,
        text: [0, 3, 4, 12],
        texttospeechcli: 12,
        texttospeechmanag: 11,
        tflite: [0, 6],
        tflitemodel: 6,
        tflitenlu: 7,
        thi: [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14],
        thousand: 8,
        three: 8,
        threshold: 14,
        through: [3, 8],
        time: 3,
        timeout: [0, 3],
        transcript: 4,
        transform: 3,
        trigger: 13,
        tts: [11, 12],
        ttserror: 12,
        twenti: 8,
        two: 8,
        txt: [3, 7],
        type: [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14],
        under: 3,
        understand: 0,
        unhyphen: 8,
        union: [3, 8],
        until: 10,
        url: [3, 12],
        use: [3, 8, 11, 12, 13, 14],
        used: [3, 8],
        uses: 5,
        using: [3, 7],
        utter: [7, 11, 12],
        uttranc: 12,
        vad: 0,
        vad_fall_delai: 13,
        vad_rise_delai: 13,
        valu: [4, 8, 14],
        variabl: 3,
        veri: 9,
        vocab: 7,
        voic: [0, 11, 12],
        voiceactivitydetector: 13,
        voiceactivitytrigg: 13,
        wakeword: 0,
        wakeworddetector: 14,
        wakewordtrigg: 14,
        webrtc: [0, 2, 9],
        websocket: 3,
        which: [7, 8, 10, 11],
        width: [1, 2, 3, 5, 13],
        window: 14,
        word: 8,
        wrapper: [11, 12],
        write: [5, 11, 14],
        written: 14,
        wss: 3,
        www: [3, 6],
        zero: 1,
    },
    titles: [
        "spokestack",
        "Activation Timeout",
        "Automatic Gain Control",
        "Automatic Speech Recognition (ASR)",
        "Speech Context",
        "IO",
        "Models",
        "Natural Language Understanding (NLU)",
        "Digits",
        "Automatic Noise Suppression",
        "Speech Pipeline",
        "Text to Speech (TTS)",
        "Spokestack",
        "Voice Activity Detection (VAD)",
        "Wakeword",
    ],
    titleterms: {
        TTS: 11,
        activ: [1, 13],
        asr: 3,
        automat: [2, 3, 9],
        buffer: 14,
        client: 11,
        cloud_client: 3,
        context: 4,
        control: 2,
        detect: 13,
        digit: 8,
        entiti: 8,
        gain: 2,
        googl: 3,
        integ: 8,
        languag: 7,
        manag: 11,
        model: [6, 7, 14],
        modul: [3, 6],
        natur: 7,
        nlu: 7,
        nois: 9,
        parser: 7,
        pipelin: 10,
        pyaudio: 5,
        recognit: 3,
        ring: 14,
        selset: 8,
        speech: [3, 4, 10, 11],
        speech_recogn: 3,
        spokestack: [0, 3, 5, 6, 12],
        suppress: 9,
        tensorflow: 6,
        text: 11,
        tflite: [7, 14],
        timeout: 1,
        understand: 7,
        vad: 13,
        voic: 13,
        wakeword: 14,
        webrtc: 13,
    },
});
